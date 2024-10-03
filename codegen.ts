import dotenv from 'dotenv';
dotenv.config();
import {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: process.env.BACKEND_BASE_GQL_URL,
  documents: 'src/graphql/*.graphql',
  generates: {
    'src/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {withHooks: true},
    },
  },
};

export default config;
