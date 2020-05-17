interface IAlert {
  show: boolean;
  color: string;
  text: string;
}

/** standard alert displaying form status after submission */
export const formAlert: IAlert = {
  show: false,
  color: 'danger',
  text: 'Something went wrong',
};

export default IAlert;
