import { UseToastOptions } from '@chakra-ui/react';
import moment from 'moment';

export * from './modal.utils';
export * from './auth.utils';

export const toastBaseConfig: UseToastOptions = {
  position: 'top',
  duration: 3500,
  isClosable: true,
};

export const toastNotCompleteFeature: UseToastOptions = {
  title: 'Feature in development',
  description: '',
  status: 'warning',
  ...toastBaseConfig,
};

export const getTimeAgo = (time: number) => {
  const arr = moment(time).fromNow(true).split(' ');

  return arr[0] + arr[1].charAt(0);
};

export const getMessageFromExecutionError = (
  executionError: string
): string | undefined => {
  const res = /'(.*)'/.exec(executionError);
  let message: string | undefined = undefined;
  if (!!res && res?.length > 0) {
    message = res[1];
  }
  return message;
};

export const to_slug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[đĐ]/g, 'd')
    .replace(/([^0-9a-z-\s-_])/g, '')
    .replace(/(\s+)/g, '_')
    .replace(/_+/g, '_')
    .replace(/^-+|-+$/g, '');
};
