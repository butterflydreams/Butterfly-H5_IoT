<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 0;
}
a {
  text-decoration: none;
}
#app {
  padding: 1rem 0.4rem;
  min-height: 100vh;
}
.status {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 0 0.1rem;
  width: 100%;
  .label {
    flex-shrink: 0;
    position: relative;
    padding: 0 0.2rem;
    width: fit-content;
    background-color: #dedede;
    line-height: 0.6rem;
    letter-spacing: 0;
    font-size: 0.28rem;
    font-weight: bold;
    text-align: left;
    color: #333333;
  }
  .txt-status {
    flex-grow: 1;
    position: relative;
    margin: 0;
    width: 0;
    background-color: #dedede;
    line-height: 0.6rem;
    letter-spacing: 0;
    font-size: 0.32rem;
    font-weight: bold;
    text-align: left;
    word-wrap: break-word;
    color: #ff0000;
  }
  .btn-operation {
    flex-shrink: 0;
    display: block;
    position: relative;
    margin-left: auto;
    width: 2rem;
    height: 0.6rem;
    border-top: solid 0.01rem #e2e2e2;
    border-right: none;
    border-bottom: solid 0.01rem #e2e2e2;
    border-left: none;
    background-image: none;
    line-height: 0.6rem;
    letter-spacing: 0;
    font-size: 0.24rem;
    font-weight: normal;
    text-align: center;
    color: #000000;
  }
}
.message {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin: 0.2rem auto;
  padding: 0 0.1rem;
  width: 100%;
  .txa-message {
    flex-grow: 1;
    position: relative;
    margin: 0;
    width: auto;
    height: 1rem;
    border-top: solid 0.01rem #e2e2e2;
    border-right: none;
    border-bottom: solid 0.01rem #e2e2e2;
    border-left: none;
    border-radius: 0;
    background-color: transparent;
    line-height: 0.4rem;
    letter-spacing: 0.01rem;
    font-size: 0.28rem;
    font-weight: normal;
    text-align: left;
    color: #333333;
    resize: none;
    &::-webkit-input-placeholder {
      color: #999999;
    }
  }
  .btn-send {
    flex-shrink: 0;
    display: block;
    position: relative;
    margin: 0;
    width: 1.8rem;
    height: 1rem;
    background-color: #00d5ff;
    line-height: 1rem;
    letter-spacing: 0;
    font-size: 0.28rem;
    font-weight: normal;
    text-align: center;
    color: #000000;
  }
}
.users {
  position: relative;
  margin: 0.6rem auto;
  width: 100%;
  border-top: solid 0.01rem #e2e2e2;
  border-right: none;
  border-bottom: solid 0.01rem #e2e2e2;
  border-left: none;
  .name {
    position: absolute;
    margin: 0 auto;
    top: -0.15rem;
    left: 0;
    right: 0;
    width: fit-content;
    line-height: 0.3rem;
    letter-spacing: 0;
    font-size: 0.26rem;
    font-weight: bold;
    text-align: center;
    color: #000000;
    z-index: 20;
  }
  .list-users {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    margin: 0.4rem auto 0 auto;
    width: 100%;
    z-index: 10;
    .item-user {
      position: relative;
      margin: 0.2rem 0.05rem;
      width: 1rem;
      height: 1rem;
      border: solid 0.02rem #000000;
      border-radius: 50%;
      background-color: #000000;
      .txt-uid {
        position: absolute;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: fit-content;
        height: fit-content;
        line-height: 0.24rem;
        letter-spacing: 0;
        font-size: 0.2rem;
        font-weight: bold;
        text-align: center;
        color: #000000;
      }
    }
    .item-null {
      position: relative;
      margin: 0.2rem auto;
      width: 1rem;
      height: 0;
      border: none;
    }
  }
}
.messages {
  position: relative;
  margin: 0.6rem auto;
  width: 100%;
  border-top: solid 0.01rem #e2e2e2;
  border-right: none;
  border-bottom: solid 0.01rem #e2e2e2;
  border-left: none;
  .name {
    position: absolute;
    margin: 0 auto;
    top: -0.15rem;
    left: 0;
    right: 0;
    width: fit-content;
    line-height: 0.3rem;
    letter-spacing: 0;
    font-size: 0.26rem;
    font-weight: bold;
    text-align: center;
    color: #000000;
    z-index: 20;
  }
  .list-messages {
    position: relative;
    margin: 0.4rem auto 0 auto;
    width: 100%;
    z-index: 10;
    .item-message {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      position: relative;
      margin: 0.1rem auto;
      padding: 0.1rem 0;
      width: 100%;
      background-color: #000000;
      .txt-uid {
        flex-shrink: 0;
        position: relative;
        margin-right: 0.15rem;
        line-height: 0.3rem;
        letter-spacing: 0;
        font-size: 0.25rem;
        font-weight: bold;
        text-align: left;
        color: #000000;
      }
      .txt-message {
        flex-grow: 1;
        position: relative;
        margin: 0;
        line-height: 0.3rem;
        letter-spacing: 0;
        font-size: 0.25rem;
        font-weight: normal;
        text-align: left;
        color: #000000;
      }
    }
  }
}
</style>

<template>
  <div class="app">
    <div class="status">
      <div class="label">STATUS：</div>
      <div class="txt-status">{{ STATUS }}</div>
      <a
        class="btn-operation"
        :style="`background-image: linear-gradient(to right, transparent, ${OPERATION.color}, transparent)`"
        href="javascript:;"
        @click="OnOperationClick()"
        >{{ OPERATION.type }}</a
      >
    </div>
    <div class="message">
      <textarea
        class="txa-message"
        rows="3"
        placeholder="Enter your messages."
        v-model="message"
        @click="$refs.refMessage.focus()"
        ref="refMessage"
      ></textarea>
      <a class="btn-send" href="javascript:;" @click="OnSendClick()">Send</a>
    </div>
    <div class="users">
      <div class="name">USERS</div>
      <div class="list-users">
        <div
          class="item-user"
          :style="`border: solid 0.02rem ${
            item.state == STATE.Connected ? '#ff0000' : '#000000'
          }; background-color: ${item.state == STATE.Connected ? '#00ff00' : '#bebebe'}`"
          v-for="(item, index) in users"
          :key="index"
        >
          <div class="txt-uid">{{ item.uid }}</div>
        </div>
        <div
          class="item-null"
          v-for="index in users.length / 6 > 1 ? 6 - (users.length % 6) : 0"
          :key="index"
        ></div>
      </div>
    </div>
    <div class="messages">
      <div class="name">MESSAGES</div>
      <div class="list-messages">
        <div
          class="item-message"
          :style="`background-color: ${uid == item.uid ? '#f7ebeb' : '#f6f6f6'}`"
          v-for="(item, index) in messages"
          :key="index"
        >
          <div class="txt-uid" :style="`color: ${uid == item.uid ? '#ff0000' : '#000000'}`">
            > {{ item.uid }}:
          </div>
          <div class="txt-message" :style="`color: ${uid == item.uid ? '#ff0000' : '#000000'}`">
            {{ item.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const STATE = {
  Connecting: 0,
  Connected: 1,
  Disconnecting: 2,
  Disconnected: 3,
  Error: -1
};
export default {
  name: "App",
  data() {
    return {
      uid: "",
      socket: null,
      tip: "",
      state: STATE.Disconnected,
      message: "",
      users: [],
      messages: []
    };
  },
  created() {
    this.uid = new URLSearchParams(window.location.search).get("uid");
    this._Websocket();
  },
  computed: {
    STATE: {
      get() {
        return STATE;
      },
      set() {}
    },
    STATUS: {
      get() {
        switch (this.state) {
          case STATE.Error:
            return `ERROR ${this.tip}`;
          case STATE.Connecting:
            return "CONNECTING...";
          case STATE.Connected:
            return "CONNECTED";
          case STATE.Disconnecting:
            return "DISCONNECTING...";
          default:
          case STATE.Disconnected:
            return "DISCONNECTED";
        }
      },
      set() {}
    },
    OPERATION: {
      get() {
        switch (this.state) {
          default:
          case STATE.Error:
          case STATE.Connecting:
          case STATE.Disconnecting:
            return { type: "Reconnect", color: "#0000ffa3" };
          case STATE.Connected:
            return { type: "Disconnect", color: "#ff0000a3" };
          case STATE.Disconnected:
            return { type: "Connected", color: "#00ff00a3" };
        }
      },
      set() {}
    }
  },
  methods: {
    OnSendClick() {
      if (this.socket && this.state == STATE.Connected && this.message) {
        this.socket.send(this.message);
        this.message = "";
      }
    },
    OnOperationClick() {
      this._Websocket();
    },
    _Websocket() {
      if (!this.uid) {
        return;
      }
      if (!this.socket) {
        this.socket = new WebSocket(`ws://localhost:10005?uid=${this.uid}`);
        this.socket.binaryType = "blob";
      }
      if (this.socket && this.state != STATE.Connected) {
        let _this = this;
        this.state = STATE.Connecting;
        this.socket.onopen = function () {
          _this.state = STATE.Connected;
        };
        this.socket.onclose = function () {
          _this.messages.push({ uid: _this.uid, message: "is offline!" });
          _this.state = STATE.Disconnected;
          _this.socket = null;
          _this.users.forEach((item) => {
            item.state = STATE.Disconnected;
          });
        };
        this.socket.onerror = function (event) {
          _this.state = STATE.Error;
          _this.tip = event;
          _this.socket = null;
        };
        this.socket.onmessage = function (event) {
          let data = JSON.parse(event.data);
          if (data.type == "login") {
            _this.messages.push({ uid: data.uid, message: "is online!" });
            _this.users = JSON.parse(data.message);
          } else if (data.type == "logout") {
            _this.messages.push({ uid: data.uid, message: "is offline!" });
            _this.users = JSON.parse(data.message);
          } else if (data.type == "message") {
            _this.messages.push({ uid: data.uid, message: data.message });
          }
        };
      } else if (this.socket && this.state == STATE.Connected) {
        this.state = STATE.Disconnecting;
        this.socket.close();
      }
    }
  }
};
</script>
