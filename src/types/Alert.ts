interface IAlert {
  show: boolean;
  color: string;
  text: string;
}

export const formAlert: IAlert = {
  show: false,
  color: 'danger',
  text: 'Something went wrong',
};

export default IAlert;
