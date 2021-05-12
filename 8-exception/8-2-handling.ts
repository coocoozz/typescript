class NetworkClient {
  tryConnect(): void {
    throw new Error('connect error..');
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login(): void {
    this.client.tryConnect();
    // login....
  }
}

class App {
  constructor(private userSerivce: UserService) {}

  // try-catch로 감싸는 부분은 에러를 잡았을때 이를 처리해줄 수 있는 로직에 적용하는 것이 best
  run(): void {
    try {
      this.userSerivce.login();
    } catch (error) {
      // errorr type이 any..... -> instanceOf 사용이 불가능 하다
      console.log('error...');
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
