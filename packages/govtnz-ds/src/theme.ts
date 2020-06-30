import { CSSVariablePattern } from '@springload/metatemplate';

const defaultThemeMap = {
  'g-theme-font-family': 'Arial, sans-serif',
  'g-theme-background-color': '#ffffff',
  'g-theme-color': '#2a2a2a',
  'g-theme-print-color': '#000000',
  'g-theme-error-color': '#b10e1e',
  'g-theme-error-border-color': '#b10e1e',
  'g-theme-error-background-color': '#b10e1e',
  'g-theme-hint-color': '#595959',
  'g-theme-focus-ring-color': '#b53cde',
  'g-theme-heading-color': '#2a2a2a',
  'g-theme-heading-xl-font-weight': '500',
  'g-theme-heading-l-font-weight': '500',
  'g-theme-heading-m-font-weight': '600',
  'g-theme-heading-s-font-weight': '600',
  'g-theme-heading-xs-font-weight': '600',
  'g-theme-heading-xxs-font-weight': '600',
  'g-theme-inverted-color': '#ffffff',
  'g-theme-inverted-background-color': '#363636',
  'g-theme-inverted-variant-background-color': '#2a2a2a',
  'g-theme-form-background-color': '#ffffff',
  'g-theme-form-color': '#000000',
  'g-theme-select-background-color': '#ffffff',
  'g-theme-form-border-color': '#2a2a2a',
  'g-theme-legend-color': '#0b0c0c',
  'g-theme-formdivider-color': '#0b0c0c',
  'g-theme-inverted-link-color': '#d3d3d3',
  'g-theme-inverted-nav-active-border-color': '#24a882',
  'g-theme-inverted-menu-button-color': '#24a882',
  'g-theme-button-active-box-shadow': '#003418',
  'g-theme-button-background-color': '#078766',
  'g-theme-button-color': '#ffffff',
  'g-theme-button-hover-background-color': '#00692f',
  'g-theme-button-disabled-background-color': '#078766',
  'g-theme-button-secondary-background-color': '#d3d3d3',
  'g-theme-button-secondary-hover-background-color': '#b2b2b2',
  'g-theme-button-secondary-color': '#0b0c0c',
  'g-theme-button-warning-background-color': '#900815',
  'g-theme-button-box-shadow-color': '#2a2a2a',
  'g-theme-radio-border': '2px solid currentColor',
  'g-theme-link-color': '#005ea5',
  'g-theme-link-focus-color': '#0b0c0c',
  'g-theme-link-hover-color': '#000c48',
  // 'g-theme-link-visited-color': '#4c2c92',
  'g-theme-link-muted-color': '#6f777b',
  'g-theme-alert-color': '#6f777b',
  'g-theme-alert-background-color': '#f4f4f4',
  'g-theme-alert-success-border-color': '#088a20',
  'g-theme-alert-warning-border-color': '#d47500',
  'g-theme-alert-error-border-color': '#b10e1e',
  'g-theme-alert-info-border-color': '#1f1bfb',
  'g-theme-alert-border-color': '#d3d3d3',
  'g-theme-alert-icon-color': '#ffffff',
  'g-theme-inset-background-color': '#f4f4f4',
  'g-theme-inset-border-color': '#23cba5',
  'g-theme-caption-color': '#6f777c'
};

export const defaultTheme: CSSVariablePattern[] = Object.keys(
  defaultThemeMap
).map(
  (key): CSSVariablePattern => ({
    id: key,
    valueSubstringMatch: key,
    defaultValue: defaultThemeMap[key]
  })
);
