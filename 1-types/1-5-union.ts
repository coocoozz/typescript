{
  // Union Types: OR!!
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('left'); // left, right, up, down 4가지 중 한가지만 인자로 넘길수 있다

  type TileSize = 8 | 16 | 24;
  const tile: TileSize = 16; // 8, 16, 24 3가지 중 한가지만 할당 가능하다

  type SuccessState = {
    response: {
      body: string;
    };
  }

  type FailState = {
    reason: string;
  }

  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'success'!
      }
    };
  }

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`success: ${state.response.body}`);
    } else {
      console.log(`fail: ${state.reason}`);
    }
  }


}