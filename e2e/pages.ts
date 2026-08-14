/** Public pages that must always load successfully. */
export const PUBLIC_PAGES = [
  { path: '/', title: /InteractGGZ/i, heading: /Innovatiestudio voor de jeugd-ggz/i },
  { path: '/tools/', title: /Tools/i, heading: /Onze tools/i },
  { path: '/tools/emdr/', title: /EMDR/i, heading: /EMDR Toolkit/i },
  { path: '/tools/bloom/', title: /Bloom/i, heading: /Bloom ACT Profiel Jeugd/i },
  { path: '/tools/context-driehoek/', title: /Driehoekmodel/i, heading: /Driehoekmodel/i },
  { path: '/tools/act-avontuur/', title: /ACT Avontuur/i, heading: /ACT Avontuur/i },
  { path: '/ontdekker/', title: /Ontdekker/i, heading: /Ontdekkersjaar/i },
  { path: '/samen-ontwikkelen/', title: /Samen ontwikkelen/i, heading: /Samen ontwikkelen/i },
  { path: '/over-ons/', title: /Over ons/i, heading: /Over ons/i },
  { path: '/privacy/', title: /Privacy/i, heading: /Privacybeleid/i },
] as const;

/** Result / utility pages (no sitemap, still part of the product flow). */
export const UTILITY_PAGES = [
  { path: '/bedankt/', heading: /Bedankt/i },
  { path: '/bedankt-nieuwsbrief/', heading: /Bedankt/i },
  { path: '/bevestigd-nieuwsbrief/', heading: /Inschrijving bevestigd/i },
  { path: '/fout/', heading: /Er ging iets mis/i },
] as const;

/** Internal preview pages — should still render without errors. */
export const PREVIEW_PAGES = [
  '/highlight-preview/',
  '/tool-faq-preview/',
  '/tool-highlights-preview/',
  '/tool-page-preview/',
  '/tool-page-proposed/',
] as const;

export const TOOL_SLUGS = [
  'emdr',
  'bloom',
  'context-driehoek',
  'act-avontuur',
] as const;

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Tools', path: '/tools/' },
  { label: 'Ontdekker', path: '/ontdekker/' },
  { label: 'Samen ontwikkelen', path: '/samen-ontwikkelen/' },
  { label: 'Over ons', path: '/over-ons/' },
] as const;
