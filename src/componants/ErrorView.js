import React from "react";
import { Message, Button, Icon } from "semantic-ui-react";

const ErrorView = () => {
  return (
    <>
      <Message negative>
        <Message.Header>
          We're sorry as we are under maintainace{" "}
        </Message.Header>
        <p>Youtube query limit exceeded, Please try after some time</p>
      </Message>
      <Button fluid color="youtube" href="https://www.youtube.com/">
        <Icon name="youtube" />Try YouTube instead
      </Button>
    </>
  );
};
export default ErrorView;
