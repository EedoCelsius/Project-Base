<template>
  <section class="space-y-6">
    <el-card shadow="hover">
      <template #header>
        <div class="space-y-2">
          <h2 class="text-xl font-semibold">{{ hero.title }}</h2>
          <p class="text-sm text-gray-500">{{ hero.subtitle }}</p>
        </div>
      </template>
      <div class="flex flex-wrap gap-3">
        <el-button
          v-for="action in hero.actions"
          :key="action.label"
          :type="action.tone === 'primary' ? 'primary' : 'default'"
          :plain="action.outlined"
        >
          {{ action.label }}
        </el-button>
      </div>
      <div class="mt-6 flex flex-wrap gap-2">
        <el-tag v-for="tag in hero.tags" :key="tag.label" :type="tag.type ?? mapTone(tag.tone)" effect="light">
          {{ tag.label }}
        </el-tag>
      </div>
    </el-card>

    <el-row :gutter="20">
      <el-col v-for="metric in metrics" :key="metric.title" :span="8">
        <el-card shadow="never">
          <div class="text-sm text-gray-500">{{ metric.title }}</div>
          <div class="mt-2 text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {{ metric.value }}
          </div>
          <p class="mt-2 text-sm text-gray-500">{{ metric.description }}</p>
          <el-tag class="mt-4" :type="mapTone(metric.status.tone)" effect="light">
            {{ metric.status.label }}
          </el-tag>
        </el-card>
      </el-col>
    </el-row>

    <el-card shadow="hover">
      <template #header>Team updates</template>
      <el-table :data="updates" size="small" border>
        <el-table-column prop="title" label="Update" />
        <el-table-column prop="owner" label="Owner" />
        <el-table-column label="Status">
          <template #default="{ row }">
            <el-tag :type="mapTone(row.status.tone)" effect="light">
              {{ row.status.label }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </section>
</template>

<script setup>
import { useShowcaseContent } from '@/composables/useShowcaseContent';

const { hero, metrics, updates } = useShowcaseContent();

const mapTone = (tone) => {
  if (tone === 'success') return 'success';
  if (tone === 'warning') return 'warning';
  return 'info';
};
</script>
