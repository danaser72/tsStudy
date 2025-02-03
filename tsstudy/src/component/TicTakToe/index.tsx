import React, { Fragment, useState, useEffect } from "react";
//import "styles/components/TicTakToe/TicTakToe.css";
import "styles/components/TicTakToe/TicTakToe.css";

const TicTakToe = () => {
  /** 턴 */
  const [turn, setTurn] = useState(true);
  /** 승자 */
  const [win, setWin] = useState(false);
  /** 판 정보 */
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  useEffect(() => {
    // 보드 상태 변경 시, 승자 판단
    setWin(checkWinner());
  }, [board]);

  /** 버튼 */
  const Button = ({ i, j }: { i: number; j: number }) => {
    const buttonClick = () => {
      // 승자가 나온 경우, 버튼을 못누르게
      if (win) return;
      // 턴을 번갈아서 진행
      setTurn(!turn);
      setBoard(
        board.map((v, _i) => {
          return v.map((v, _j) => {
            if (i === _i && j === _j) return turn ? "O" : "X";
            else if (v !== "") return v;
            return "";
          });
        })
      );
    };
    const val = board[i][j];
    // 빈 값일 경우, 버튼, 아닐 경우 본래 값 표시
    return val === "" ? (
      <button onClick={buttonClick}>{turn ? "O" : "X"}</button>
    ) : (
      <Fragment>{val}</Fragment>
    );
  };

  /** 초기화 */
  const createBoard = () => {
    setTurn(true);
    setWin(false);
    setBoard(
      board.map((v) => {
        return v.map(() => {
          return "";
        });
      })
    );
  };

  /** 승자 확인 */
  const checkWinner = (): boolean => {
    let chk = false;
    // 가로 체크
    board.map((v, i) => {
      if (!chk) {
        const val = board[i][0];
        chk = true;
        v.map((v, j) => {
          if (chk) chk = val === board[i][j] && val !== "";
        });
      }
    });

    if (!chk) {
      //세로 체크
      board.map((v, i) => {
        if (!chk) {
          const val = board[0][i];
          chk = true;
          v.map((v, j) => {
            if (chk) chk = val === board[j][i] && val !== "";
          });
        }
      });
    }

    if (!chk) {
      // 대각선 체크1
      chk = true;
      board.map((v, i) => {
        const val = board[0][0];
        if (chk) chk = val === board[i][i] && val !== "";
      });
    }

    if (!chk) {
      // 대각선 체크1
      chk = true;
      board.map((v, i) => {
        const val = board[0][v.length - 1];
        if (chk) chk = val === board[i][v.length - i - 1] && val !== "";
      });
    }

    return chk;
  };

  return (
    <Fragment>
      <button className={`py-2 font-semibold rounded-lg`} onClick={createBoard}>
        초기화
      </button>
      <table id="board">
        <tbody>
          {board.map((v, i) => {
            return (
              <tr key={i}>
                {v.map((v, j) => {
                  return <td key={j}>{<Button i={i} j={j} />}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {win ? <div>승자 : {!turn ? "1P" : "2P"}</div> : null}
    </Fragment>
  );
};

export default TicTakToe;
