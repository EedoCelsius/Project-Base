<template>
  <section class="space-y-6">
    <Card>
      <div class="space-y-2">
        <h2 class="text-xl font-semibold text-surface-900">{{ hero.title }}</h2>
        <p class="text-sm text-surface-600">{{ hero.subtitle }}</p>
      </div>
      <div class="mt-4 flex flex-wrap gap-3">
        <ActionButton
          v-for="action in hero.actions"
          :key="action.label"
          :tone="action.tone"
          :outlined="action.outlined"
        >
          {{ action.label }}
        </ActionButton>
      </div>
      <div class="mt-6 flex flex-wrap gap-2">
        <ToneBadge v-for="tag in hero.tags" :key="tag.label" :tone="tag.tone">
          {{ tag.label }}
        </ToneBadge>
      </div>
    </Card>

    <div class="grid gap-6 md:grid-cols-3">
      <Card v-for="metric in metrics" :key="metric.title">
        <p class="text-sm text-surface-600">{{ metric.title }}</p>
        <div class="mt-2 text-3xl font-semibold text-surface-900">{{ metric.value }}</div>
        <p class="mt-2 text-sm text-surface-600">{{ metric.description }}</p>
        <ToneBadge class="mt-4" :tone="metric.status.tone">
          {{ metric.status.label }}
        </ToneBadge>
      </Card>
    </div>

    <Card>
      <h3 class="text-base font-semibold text-surface-900">Team updates</h3>
      <div class="mt-4 overflow-hidden rounded-xl border border-surface-200">
        <table class="min-w-full divide-y divide-surface-200">
          <thead class="bg-surface-50 text-left text-xs font-semibold uppercase tracking-wide text-surface-500">
            <tr>
              <th class="px-4 py-3">Update</th>
              <th class="px-4 py-3">Owner</th>
              <th class="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-200 text-sm">
            <tr
              v-for="update in updates"
              :key="update.title"
              class="bg-surface-0 transition hover:bg-surface-50"
            >
              <td class="px-4 py-3 text-surface-700">{{ update.title }}</td>
              <td class="px-4 py-3 text-surface-700">{{ update.owner }}</td>
              <td class="px-4 py-3">
                <ToneBadge :tone="update.status.tone">
                  {{ update.status.label }}
                </ToneBadge>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  </section>
</template>

<script setup>
import ActionButton from '@/components/base/ActionButton.vue';
import Card from '@/components/base/Card.vue';
import ToneBadge from '@/components/base/ToneBadge.vue';
import { useShowcaseContent } from '@/composables/showcaseContent';

const { hero, metrics, updates } = useShowcaseContent();
</script>
