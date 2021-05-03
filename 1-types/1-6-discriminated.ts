{
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  }

  type FailState = {
    result: 'fail';
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'success!!!!!',
      }
    };
  }

  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`success: ${state.response.body}`);
    } else {
      console.log(`fail: ${state.reason}`);
    }
  }
}