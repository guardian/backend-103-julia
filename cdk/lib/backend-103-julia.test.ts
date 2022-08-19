import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { Backend103Julia } from './backend-103-julia';

describe('The Backend103Julia stack', () => {
	it('matches the snapshot', () => {
		const app = new App();
		const stack = new Backend103Julia(app, 'Backend103Julia', {
			stack: 'deploy',
			stage: 'TEST',
		});
		const template = Template.fromStack(stack);
		expect(template.toJSON()).toMatchSnapshot();
	});
});
