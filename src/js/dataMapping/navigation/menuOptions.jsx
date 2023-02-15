/**
 * menuOptions.js
 * Created by Kevin Li 1/18/18
 */

import GlobalConstants from 'GlobalConstants';

const { FILES_SERVER_BASE_URL } = GlobalConstants;

export const searchOptions = [
    {
        label: 'Advanced Search',
        url: '/search',
        enabled: true
    },
    {
        label: 'Keyword Search',
        url: '/keyword_search',
        enabled: true
    }
];

export const profileOptions = [
    {
        label: 'Agencies',
        url: '/agency',
        enabled: true
    },
    {
        label: 'Federal Accounts',
        url: '/federal_account',
        enabled: true
    },
    {
        label: 'States',
        url: '/state',
        enabled: true
    },
    {
        label: 'Recipients',
        url: '/recipient',
        enabled: true
    },
];

export const resourceOptions = [
    {
        label: 'Glossary',
        url: '?glossary',
        enabled: true,
        appendToExistingUrl: true
    },
    {
        label: 'Data Dictionary',
        type: 'data-dictionary',
        url: '/data-dictionary',
        code: 'dictionary',
        description: '',
        callToAction: 'Explore the Data Dictionary',
        shouldOpenNewTab: false,
        enabled: true,
        externalLink: false
    },
];

export const downloadOptions = [
    {
        label: 'Award Data Archive',
        type: 'award_data_archive',
        url: '/download_center/award_data_archive',
        code: 'archive',
        description: 'The quickest way to grab award data. Pre-generated award files for each major agency (by fiscal year) save on download time.',
        callToAction: 'Grab Award Files',
        shouldOpenNewTab: false,
        enabled: true,
        externalLink: false
    },
    {
        label: 'Custom Award Data',
        type: 'awards',
        url: '/download_center/custom_award_data',
        code: 'award',
        description: 'The best way to grab detailed slices of award data. Specify the agency, timeframe, award type, award level, and more.',
        callToAction: 'Download Award Data',
        shouldOpenNewTab: false,
        enabled: true,
        externalLink: false
    },
    {
        label: 'Custom Account Data',
        type: 'accounts',
        url: '/download_center/custom_account_data',
        code: 'account',
        description: 'The best way to grab detailed subsets of account data, which offer a broad view of how the government allocates funding from top to bottom.',
        callToAction: 'Download Account Data',
        shouldOpenNewTab: false,
        enabled: true,
        externalLink: false
    },
    
];
