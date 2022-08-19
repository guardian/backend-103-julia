import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { Backend103Julia } from '../lib/backend-103-julia';

const app = new App();
new Backend103Julia(app, 'Backend103Julia-CODE', {
	stack: 'deploy',
	stage: 'CODE',
});
