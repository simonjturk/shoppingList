import { FormlyFieldConfig } from '@ngx-formly/core';

export const shoppingListFormfields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'List Name',
        placeholder: 'Name your shopping list',
        required: true,
      },
    },
    {
      key: 'favourite',
      type: 'toggle',
      templateOptions: {
        label: 'Favourite',
        required: true,
      },
    },
    {
      key: 'tags',
      type: 'chips',     
      templateOptions: {
        label: 'Tags',
        filter: ['Bilal', 'Haidar'],
        required: true,
      },
    }
  ];