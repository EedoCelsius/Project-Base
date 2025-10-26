<template>
  <section class="space-y-6">
    <Card>
      <template #title>
        <div class="space-y-2">
          <span class="text-xl font-semibold text-surface-900">{{ hero.title }}</span>
          <span class="block text-sm text-surface-600">{{ hero.subtitle }}</span>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-wrap gap-3">
            <Button
              v-for="action in hero.actions"
              :key="action.label"
              :label="action.label"
              :severity="action.tone === 'secondary' ? 'secondary' : 'primary'"
              :outlined="action.outlined"
              size="small"
              rounded
            />
          </div>
          <div class="flex flex-wrap gap-2">
            <Tag
              v-for="tag in hero.tags"
              :key="tag.label"
              :value="tag.label"
              :severity="tag.tone"
              rounded
            />
          </div>
        </div>
      </template>
    </Card>

    <div class="grid gap-6 md:grid-cols-3">
      <Card v-for="metric in metrics" :key="metric.title" class="shadow-sm">
        <template #title>
          <span class="text-xs font-semibold uppercase tracking-wide text-surface-500">{{ metric.title }}</span>
        </template>
        <template #content>
          <div class="space-y-3">
            <div class="text-3xl font-semibold text-surface-900">
              {{ metric.value }}
            </div>
            <p class="text-sm text-surface-600">
              {{ metric.description }}
            </p>
            <Tag class="mt-2" :value="metric.status.label" :severity="metric.status.tone" rounded />
          </div>
        </template>
      </Card>
    </div>

    <Card>
      <template #title>
        <span class="text-lg font-semibold text-surface-900">Team updates</span>
      </template>
      <template #content>
        <DataTable
          :value="updates"
          size="small"
          stripedRows
          :pt="{
            table: { class: 'text-sm' },
            header: { class: 'bg-surface-0' },
            headerRow: { class: 'text-surface-600 uppercase text-xs tracking-wide' },
            bodyRow: { class: 'text-surface-700' }
          }"
        >
          <Column field="title" header="Update" />
          <Column field="owner" header="Owner" />
          <Column header="Status">
            <template #body="{ data }">
              <Tag :value="data.status.label" :severity="data.status.tone" rounded />
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </section>
</template>

<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import Tag from 'primevue/tag';
import { useShowcaseContent } from '@/composables/showcaseContent';

const { hero, metrics, updates } = useShowcaseContent();
</script>

<script>
export const routes = [];
</script>
