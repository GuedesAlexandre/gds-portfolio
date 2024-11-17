<template>
    <div>
        <h1>{{ Project.name }}</h1>
        <p>{{ Project.description }}</p>
    </div>
</template>

<script setup lang="ts">
import { data } from "~/data/Project";
import type { ProjectDetails } from "~/models/ProjectDetails";

const route = useRoute();
const Project = ref<ProjectDetails>(
    data.find(
        (project) => project.identifier === route.params.id,
    ) as ProjectDetails,
);
</script>
