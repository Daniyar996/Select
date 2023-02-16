import React, {Component} from 'react';
import ReactSelect from 'react-select';
import {inject, observer} from 'mobx-react';
import {withTranslation} from 'react-i18next';

// https://github.com/JedWatson/react-select/tree/v1.x#select-props

@withTranslation()
@inject('appStore')
@observer
export default class Select extends Component {
  render() {
    const {
      appStore,
      value,
      valueKey,
      labelKey,
      multi,
      placeholder,
      options,
      optionRenderer,
      valueRenderer,
      onChange,
      disabled,
      t,
      ...rest
    } = this.props;

    return (
      <ReactSelect
        value={value}
        valueKey={valueKey}
        multi={multi}
        placeholder={t(placeholder) || t('Выберите')}
        labelKey={labelKey}
        loadingPlaceholder={t('Загрузка...')}
        noResultsText={t('Пусто')}
        options={options}
        optionRenderer={optionRenderer}
        valueRenderer={valueRenderer}
        disabled={disabled || appStore.isBusy}
        onChange={val => {
          if (onChange) {
            onChange(val);
          }
        }}
        {...rest}
      />
    );
  }
}
