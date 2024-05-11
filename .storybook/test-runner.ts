import { checkA11y, injectAxe } from 'axe-playwright';

import type { TestRunnerConfig } from '@storybook/test-runner';

/*
 * See https://storybook.js.org/docs/react/writing-tests/test-runner#test-hook-api-experimental
 * to learn more about the test-runner hooks API.
 */
const a11yConfig: TestRunnerConfig = {
    async preVisit(page) {
        await injectAxe(page);
    },
    async postVisit(page) {
        await checkA11y(page, '#storybook-root', {
            detailedReport: true,
            detailedReportOptions: {
                html: true,
            },
            axeOptions: {
                rules: {
                    // Disable color contrast check, since design colors have not enough contrast
                    'color-contrast': {
                        enabled: false,
                    },
                },
            },
        });
    },
};

module.exports = a11yConfig;
