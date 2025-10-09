<template>
  <section class="space-y-6">
    <Card>
      <template #title>{{ hero.title }}</template>
      <template #subtitle>{{ hero.subtitle }}</template>
      <template #content>
        <div class="flex flex-wrap gap-3">
          <Button
            v-for="action in hero.actions"
            :key="action.label"
            :label="action.label"
            :severity="action.tone === 'secondary' ? 'secondary' : 'primary'"
            :outlined="action.outlined"
          />
        </div>
        <div class="mt-6 flex flex-wrap gap-2">
          <Tag v-for="tag in hero.tags" :key="tag.label" :value="tag.label" :severity="tag.tone" rounded />
        </div>
      </template>
    </Card>

    <div class="grid gap-6 md:grid-cols-3">
      <Panel v-for="metric in metrics" :key="metric.title" :header="metric.title">
        <div class="text-3xl font-semibold">
          {{ metric.value }}
        </div>
        <p class="mt-2 text-sm">
          {{ metric.description }}
        </p>
        <Tag class="mt-4" :value="metric.status.label" :severity="metric.status.tone" rounded />
      </Panel>
    </div>

    <Card>
      <template #title>Team updates</template>
      <template #content>
        <DataTable :value="updates" size="small" stripedRows>
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
import Panel from 'primevue/panel';
import Tag from 'primevue/tag';
import { useShowcaseContent } from '@/composables/useShowcaseContent';

const { hero, metrics, updates } = useShowcaseContent();
</script>
