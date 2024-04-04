function Comment(props) {
    return (
        <div className="comment">
            <div className="user-info">

                {/*  <img className="avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                /> */}
                
                <Avatar user={props.athor} />

                <div className="user-info-name">
                    {props.author.name}
                </div>
            </div>

            <div className="comment-text">
                {props.text}
            </div>

            <div className="comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}

// 위 코드의 props는 아래와 같은 형태
props = {
    author: {
        name: "윤호",
        avatarUrl: "https://...",
    },
    text: "댓글",
    date: Date.now(),
}

