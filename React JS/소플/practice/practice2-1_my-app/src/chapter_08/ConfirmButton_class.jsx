import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

        // 확인 여부를 저장하기 위해 isConfirmed라는 변수를 갖고 있음, 초기값은 false
        this.state = {
            isConfirmed: false,
        };

        // Class fields syntax 사용 위해 주석 처리
        // this.handleConfirm = this.handleConfirm.bind(this);
    }

    // onClick 이벤트 처리하기 위해 이벤트 핸들러 생성

    // 1. bind를 사용하여 이벤트 핸들러 처리
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    // 2. Class fields syntax 사용
    // Arrow function 사용
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button 
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
            >
                {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;