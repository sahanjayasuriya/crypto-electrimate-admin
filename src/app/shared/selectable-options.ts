import { IOption } from 'ng-select';
import { RadioButtonOption } from '../forms/components/radio-button';

export const educationOptions: Array<IOption> = [
    {
        label: 'Primary School',
        value: 'PRIMARY_SCHOOL'
    },
    {
        label: 'O/L',
        value: 'ORDINARY_LEVEL'
    },
    {
        label: 'A/L',
        value: 'ADVANCED_LEVEL'
    },
    {
        label: 'Diploma',
        value: 'DIPLOMA'
    },
    {
        label: 'Degree',
        value: 'DEGREE'
    },
    {
        label: 'Vocational',
        value: 'VOCATIONAL'
    }
];

export const maritalStatusOptions: Array<RadioButtonOption> = [
    {
        value: 'SINGLE',
        label: 'Single'
    },
    {
        value: 'MARRIED',
        label: 'Married'
    },
    {
        value: 'WIDOWED',
        label: 'Widowed'
    }
];

export const genderOptions: Array<RadioButtonOption> = [
    {
        value: 'MALE',
        label: 'Male'
    },
    {
        value: 'FEMALE',
        label: 'Female'
    }
];

export const occupationOptions: Array<IOption> = [
    {
        label: 'Business',
        value: 'BUSINESS'
    },
    {
        label: 'Government',
        value: 'GOVERNMENT'
    },
    {
        label: 'Private',
        value: 'PRIVATE'
    },
    {
        label: 'Jobbing',
        value: 'JOBBING'
    }
];

export const relationOptions: Array<IOption> = [
    {
        label: 'Relation',
        value: 'RELATION'
    },
    {
        label: 'Friend',
        value: 'FRIEND'
    },
    {
        label: 'Other',
        value: 'OTHER'
    }
];

export const businessTypes: Array<IOption> = [
    {
        label: 'Shops Business',
        value: 'SHOPS_BUSINESS'
    },
    {
        label: 'Mobile Business',
        value: 'MOBILE_BUSINESS'
    },
    {
        label: 'Animal Husbandry',
        value: 'ANIMAL_HUSBANDRY'
    },
    {
        label: 'Agriculture',
        value: 'AGRICULTURE'
    },
    {
        label: 'Production',
        value: 'PRODUCTION'
    },
    {
        label: 'Transport Service',
        value: 'TRANSPORT_SERVICE'
    },
    {
        label: 'Service',
        value: 'SERVICE'
    },
    {
        label: 'Vocational',
        value: 'VOCATIONAL'
    },
    {
        label: 'Others',
        value: 'OTHERS'
    }
];

export const loanProductPeriodTypeOptions: Array<IOption> = [
    {
        label: 'Weeks',
        value: 'WEEKS'
    },
    {
        label: 'Months',
        value: 'MONTHS'
    },
    {
        label: 'Years',
        value: 'YEARS'
    }
];
