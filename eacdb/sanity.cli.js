import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'szzs0rhe',
    dataset: 'production',
    useCdn: true, 
  },
});