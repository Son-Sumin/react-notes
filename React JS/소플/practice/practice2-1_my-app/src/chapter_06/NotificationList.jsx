import React from "react";
import Notification from "./Notification";

// 로그 내용 구분하기 위해 id 추가
const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);
        
        // state 선언 (notifications이라는 빈 배열 state에 넣기)
        // 생성자는 앞으로 사용할 데이터를 state에 넣어서 초기화함
        this.state = {
            notifications: [],
        };
    }

    // Class Component의 생명주기 함수 중 하나
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                // state 업데이트하기 위해 setState 함수 사용
                this.setState({
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);  // 알림 추가 모두 끝나면 notifications 비우도록 코드 추가 (componentWillUnmount함수 보기 위해)
            }
        }, 1500);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    // notifications 컴포넌트에 전달할 props의 key, id 추가하기
    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id}  // map 함수 사용시 'key' 반드시 사용
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;
