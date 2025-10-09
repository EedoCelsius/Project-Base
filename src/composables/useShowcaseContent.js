export function useShowcaseContent() {
  const hero = {
    title: 'Product delivery snapshot',
    subtitle:
      'Follow the same release summary rendered with PrimeVue, Element Plus, or custom Tailwind components to compare their default aesthetics.',
    actions: [
      { label: 'Launch sprint', tone: 'primary' },
      { label: 'View backlog', tone: 'secondary', outlined: true }
    ],
    tags: [
      { label: 'Sprint 12', tone: 'info' },
      { label: 'Design QA', tone: 'success' },
      { label: 'Feedback window', tone: 'warning' }
    ]
  };

  const metrics = [
    {
      title: 'Active projects',
      value: '12',
      description: 'Design and development initiatives currently in motion.',
      status: { label: 'On track', tone: 'success' }
    },
    {
      title: 'Design QA progress',
      value: '8 / 10',
      description: 'Components reviewed before the next design sign-off.',
      status: { label: 'Needs review', tone: 'warning' }
    },
    {
      title: 'Customer feedback',
      value: '24',
      description: 'New comments captured from research sessions this week.',
      status: { label: 'New insights', tone: 'info' }
    }
  ];

  const updates = [
    {
      title: 'Marketing site refresh',
      owner: 'Avery Tan',
      status: { label: 'Review', tone: 'info' }
    },
    {
      title: 'Dashboard polish',
      owner: 'Chris Lee',
      status: { label: 'In progress', tone: 'warning' }
    },
    {
      title: 'Billing UX audit',
      owner: 'Morgan Fox',
      status: { label: 'Complete', tone: 'success' }
    }
  ];

  return {
    hero,
    metrics,
    updates
  };
}
