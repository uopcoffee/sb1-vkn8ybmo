import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MenuLinkItem {
  title: string;
  description?: string;
  to: string;
  external?: boolean;
}

interface MenuColumn {
  heading: string;
  items: MenuLinkItem[];
}

interface MenuGroup {
  id: string;
  label: string;
  columns: MenuColumn[];
}

const DEFAULT_GROUPS: MenuGroup[] = [
  {
    id: 'products',
    label: 'Products',
    columns: [
      {
        heading: 'Service Lanes',
        items: [
          { title: 'Recurring Operations', description: 'Close, AP/AR, compliance, reporting', to: '/services#recurring' },
          { title: 'Finance Advisory', description: 'FP&A, board reporting, capital planning', to: '/services#advisory' },
          { title: 'Digital Transformation', description: 'Systems, automation, data architecture', to: '/services#transformation' },
        ],
      },
      {
        heading: 'Why Ballast',
        items: [
          { title: 'Customer stories', description: 'Examples of our work and outcomes', to: '/services#case-studies' },
          { title: 'Trust & Security', description: 'Controls and rigor you can rely on', to: '/faq#trust' },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    columns: [
      {
        heading: 'By stage',
        items: [
          { title: 'Seed–A', description: 'Stand up accounting & reporting', to: '/services#seed' },
          { title: 'Series B–C', description: 'Scale finance operations', to: '/services#growth' },
        ],
      },
      {
        heading: 'By industry',
        items: [
          { title: 'SaaS', description: 'Usage, revenue, and retention reporting', to: '/services#saas' },
          { title: 'Commerce', description: 'Inventory, margins, and cash cycles', to: '/services#commerce' },
        ],
      },
    ],
  },
];

function useOutsideClick<T extends HTMLElement>(onOutside: () => void) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) onOutside();
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [onOutside]);
  return ref;
}

const MegaMenu: React.FC<{ groups?: MenuGroup[] }> = ({ groups = DEFAULT_GROUPS }) => {
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
  const menubarId = useId();

  const groupIdToPanelId = useMemo(() => {
    const map = new Map<string, string>();
    groups.forEach((g) => map.set(g.id, `${g.id}-panel-${menubarId}`));
    return map;
  }, [groups, menubarId]);

  function closeMenu() {
    setOpenGroupId(null);
  }

  const containerRef = useOutsideClick<HTMLDivElement>(closeMenu);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!openGroupId) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMenu();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [openGroupId]);

  const groupLabels = groups.map((g) => g.label);
  function focusTriggerByIndex(index: number) {
    const triggers = document.querySelectorAll<HTMLButtonElement>(`[data-mega-trigger="${menubarId}"]`);
    const target = triggers[index];
    if (target) target.focus();
  }

  function onTriggerKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number, groupId: string) {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        focusTriggerByIndex((index + 1) % groupLabels.length);
        break;
      case 'ArrowLeft':
        e.preventDefault();
        focusTriggerByIndex((index - 1 + groupLabels.length) % groupLabels.length);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setOpenGroupId(groupId);
        setTimeout(() => {
          const panel = document.getElementById(groupIdToPanelId.get(groupId) || '');
          const firstLink = panel?.querySelector<HTMLElement>('a, button');
          firstLink?.focus();
        }, 0);
        break;
      case 'Escape':
        e.preventDefault();
        closeMenu();
        break;
    }
  }

  return (
    <div ref={containerRef} className="relative hidden md:flex items-center gap-6" aria-label="Primary" role="navigation">
      <div role="menubar" aria-label="Main" className="flex items-center gap-2">
        {groups.map((group, index) => {
          const isOpen = openGroupId === group.id;
          const panelId = groupIdToPanelId.get(group.id)!;
          return (
            <div key={group.id} className="relative">
              <button
                type="button"
                className={`px-3 py-2 rounded-md text-primary-700 hover:text-accent-900 hover:bg-neutral-100 aria-expanded:${isOpen}`}
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onMouseEnter={() => setOpenGroupId(group.id)}
                onFocus={() => setOpenGroupId(group.id)}
                onKeyDown={(e) => onTriggerKeyDown(e, index, group.id)}
                data-mega-trigger={menubarId}
              >
                <span className="inline-flex items-center gap-1">
                  {group.label}
                  <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90 text-accent-700' : 'rotate-0 text-primary-400'}`} />
                </span>
              </button>

              {isOpen && (
                <div
                  id={panelId}
                  role="group"
                  aria-label={`${group.label} panel`}
                  className="absolute left-0 top-full mt-2 w-[720px] rounded-xl shadow-strong glass p-6 grid grid-cols-2 gap-6 z-50"
                  onMouseLeave={() => closeMenu()}
                >
                  {group.columns.map((col, cIdx) => (
                    <div key={cIdx}>
                      <div className="text-xs uppercase tracking-wide text-primary-400 mb-3">{col.heading}</div>
                      <ul className="space-y-2">
                        {col.items.map((item, iIdx) => (
                          <li key={iIdx}>
                            {item.external ? (
                              <a href={item.to} target="_blank" rel="noreferrer noopener" className="group flex items-start gap-3 rounded-md p-3 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-accent-500">
                                <ExternalLink className="h-4 w-4 mt-0.5 text-primary-300" />
                                <span>
                                  <span className="block font-semibold text-primary-700 group-hover:text-accent-900">{item.title}</span>
                                  {item.description && (<span className="block text-sm text-primary-400">{item.description}</span>)}
                                </span>
                              </a>
                            ) : (
                              <Link to={item.to} className="group flex items-start gap-3 rounded-md p-3 hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-accent-500" onClick={closeMenu}>
                                <Sparkles className="h-4 w-4 mt-0.5 text-primary-300" />
                                <span>
                                  <span className="block font-semibold text-primary-700 group-hover:text-accent-900">{item.title}</span>
                                  {item.description && (<span className="block text-sm text-primary-400">{item.description}</span>)}
                                </span>
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="col-span-2 -mx-3 mt-2 flex items-center gap-3">
                    <Link to="/contact" className="btn btn-accent btn-md rounded-full px-5" onClick={closeMenu}>Start now</Link>
                    <Link to="/contact" className="btn btn-outline btn-md rounded-full px-5" onClick={closeMenu}>Contact sales</Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <Link to="/pricing" className="px-3 py-2 rounded-md text-primary-700 hover:text-accent-900 hover:bg-neutral-100">Pricing</Link>
        <Link to="/resources" className="px-3 py-2 rounded-md text-primary-700 hover:text-accent-900 hover:bg-neutral-100">Resources</Link>
      </div>

      <div className="ml-4 flex items-center gap-2">
        <Link to="/contact" className="btn btn-accent btn-md rounded-full px-5">Start now</Link>
        <Link to="/contact" className="btn btn-outline btn-md rounded-full px-5">Contact sales</Link>
      </div>
    </div>
  );
};

export default MegaMenu;