export interface CriteriaOption {
  label: string;
  value: number;
}

export interface Criteria {
  id: string;
  label: string;
  icon: string;
  maxPoints: number;
  options: CriteriaOption[];
  tooltip: string;
}

export const CRITERIA_DATA: Criteria[] = [
  {
    id: 'dr',
    label: 'DR',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-2.svg',
    maxPoints: 150,
    tooltip: "A higher Domain Rating shows the site's overall authority and increases the potential SEO value of your backlink.",
    options: [
      { label: 'DR 90', value: 200 },
      { label: 'DR 80', value: 150 },
      { label: 'DR 70', value: 100 },
      { label: 'DR 60', value: 50 },
      { label: 'DR 50', value: 25 }
    ]
  },
  {
    id: 'traffic',
    label: 'Traffic',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-4.svg',
    maxPoints: 100,
    tooltip: "Organic traffic reflects whether a site attracts real visitors and indicates how trusted it is by search engines.",
    options: [
      { label: '1M +', value: 100 },
      { label: '101,000 - 500,000', value: 50 },
      { label: '10,001 - 100,000', value: 30 },
      { label: '1,001 - 10,000', value: 20 },
      { label: '1,000', value: 10 }
    ]
  },
  {
    id: 'relevance',
    label: 'Relevance',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-5.svg',
    maxPoints: 50,
    tooltip: "Relevance measures how closely the site's content and audience match your own industry, topic, or keywords.",
    options: [
      { label: 'Same point-point, persona, industry & keywords', value: 100 },
      { label: 'Similar point-point, persona, industry & keywords', value: 50 },
      { label: 'Completely unrelated', value: 0 }
    ]
  },
  {
    id: 'type',
    label: 'Type',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-6.svg',
    maxPoints: 50,
    tooltip: "The website type—SaaS, service, or blog—determines how much weight a backlink carries for commercial versus informational goals.",
    options: [
      { label: 'SaaS', value: 50 },
      { label: 'Service', value: 30 },
      { label: 'Blog', value: 10 }
    ]
  },
  {
    id: 'homePageLinks',
    label: 'Home page links',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-7.svg',
    maxPoints: 0,
    tooltip: "The number of links on a homepage shows how diluted a site's link equity is and whether it passes real authority.",
    options: [
      { label: 'Normal interal links', value: 0 },
      { label: 'Excessive outbound links', value: -10 }
    ]
  },
  {
    id: 'mainNavigation',
    label: 'Main Navigation',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-6.svg',
    maxPoints: 0,
    tooltip: "A clear, focused navigation signals that the site is organized and topically aligned with its main purpose.",
    options: [
      { label: 'Aligned', value: 0 },
      { label: 'Random', value: -10 }
    ]
  },
  {
    id: 'visualContent',
    label: 'Visual & Content Review',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-8.svg',
    maxPoints: 25,
    tooltip: "Good design, clean layout, and professional branding suggest a credible and trustworthy website.",
    options: [
      { label: 'Is the website design clean and includes most', value: 25 },
      { label: 'Somewhere in the middle', value: 0 },
      { label: 'Website design is not clean and missing most', value: -25 }
    ]
  },
  {
    id: 'ads',
    label: 'Ads',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-8.svg',
    maxPoints: 10,
    tooltip: "Too many ads lower user trust and indicate that a site may sell links or rely on low-quality traffic.",
    options: [
      { label: 'None', value: 10 },
      { label: 'Few', value: 0 },
      { label: 'A lot', value: -10 }
    ]
  },
  {
    id: 'location',
    label: 'Location',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-4.svg',
    maxPoints: 0,
    tooltip: "Where a site's visitors come from helps determine whether its audience matches your target market.",
    options: [
      { label: 'Most traffic coming from target locations', value: 50 },
      { label: '~50% traffic coming from target locations', value: 25 },
      { label: 'Most traffic coming English-native countries', value: 10 },
      { label: '>50% not coming from English-native countries', value: 0 }
    ]
  },
  {
    id: 'drTrend',
    label: 'DR in last 2 years',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-9.svg',
    maxPoints: 10,
    tooltip: "A steadily rising Domain Rating shows consistent growth and a healthy backlink profile.",
    options: [
      { label: 'Trending up a lot', value: 50 },
      { label: 'Trending up', value: 25 },
      { label: 'Stable', value: 10 },
      { label: 'Trending down', value: -10 },
      { label: 'Trending down a lot', value: -25 }
    ]
  },
  {
    id: 'trafficTrend',
    label: 'Traffic in last 2 years',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-9.svg',
    maxPoints: -10,
    tooltip: "An upward traffic trend signals increasing visibility and a stable SEO presence.",
    options: [
      { label: 'Trending up a lot', value: 50 },
      { label: 'Trending up', value: 25 },
      { label: 'Stable', value: 10 },
      { label: 'Trending down', value: -10 },
      { label: 'Trending down a lot', value: -25 }
    ]
  },
  {
    id: 'topKeywords',
    label: 'Top 10 keywords in last 1 year',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-9.svg',
    maxPoints: 10,
    tooltip: "Tracking top keywords reveals whether a site's search performance is growing in relevant areas.",
    options: [
      { label: 'Trending up a lot', value: 30 },
      { label: 'Trending up', value: 20 },
      { label: 'Stable', value: 10 },
      { label: 'Trending down', value: -10 },
      { label: 'Trending down a lot', value: -25 }
    ]
  },
  {
    id: 'keywords',
    label: 'Keywords',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-5.svg',
    maxPoints: 10,
    tooltip: "A site ranking for terms related to your niche adds contextual authority to your backlink.",
    options: [
      { label: 'Ranked on related keywords to industry or persona', value: 25 },
      { label: 'Ranked on some-what related keywords industry or persona', value: 10 },
      { label: 'Unaligned', value: -10 }
    ]
  },
  {
    id: 'anchors',
    label: 'Anchors',
    icon: 'https://c.animaapp.com/mhpshpbzxw83st/assets/icon-7.svg',
    maxPoints: 10,
    tooltip: "Balanced anchor text across branded and generic phrases indicates a natural and safe link profile.",
    options: [
      { label: 'Good mix: brand, product, urls, white noise, random', value: 10 },
      { label: 'Somewhere in the middle', value: 0 },
      { label: 'Over-optimized & random', value: -10 }
    ]
  }
];
