import Key from "./Key";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div id="keyboard">
      <div className="keyboard row">
        {keys1.map((key) => (
          <Key key={key} value={key} />
        ))}
      </div>
      <div className="keyboard row">
        <div className="spacer half"></div>
        {keys2.map((key) => (
          <Key key={key} value={key} />
        ))}
        <div className="spacer half"></div>
      </div>
      <div className="keyboard row">
        <button 
          key="enter" 
          className="one-and-a-half">
            enter
        </button>
        {keys3.map((key) => (
          <Key key={key} value={key} />
        ))}
        <button     
          key="delete"
          className="one-and-a-half">
            delete
        </button>
      </div>
    </div>
  );
};

export default Keyboard;

// import { getStatuses } from '../../lib/statuses'
// import { Key } from './Key'
// import { ENTER_TEXT, DELETE_TEXT } from '../../constants/strings'
// import { localeAwareUpperCase } from '../../lib/words'

// type Props = {
//   onChar: (value: string) => void
//   onDelete: () => void
//   onEnter: () => void
//   guesses: string[]
//   isRevealing?: boolean
// }

// export const Keyboard = ({
//   onChar,
//   onDelete,
//   onEnter,
//   guesses,
//   isRevealing,
// }: Props) => {
//   const charStatuses = getStatuses(guesses)

//   const onClick = (value: string) => {
//     if (value === 'ENTER') {
//       onEnter()
//     } else if (value === 'DELETE') {
//       onDelete()
//     } else {
//       onChar(value)
//     }
//   }

//   useEffect(() => {
//     const listener = (e: KeyboardEvent) => {
//       if (e.code === 'Enter') {
//         onEnter()
//       } else if (e.code === 'Backspace') {
//         onDelete()
//       } else {
//         const key = localeAwareUpperCase(e.key)
//         // TODO: check this test if the range works with non-english letters
//         if (key.length === 1 && key >= 'A' && key <= 'Z') {
//           onChar(key)
//         }
//       }
//     }
//     window.addEventListener('keyup', listener)
//     return () => {
//       window.removeEventListener('keyup', listener)
//     }
//   }, [onEnter, onDelete, onChar])

//   return (
//     <div>
//       <div className="flex justify-center mb-1">
//         {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((key) => (
//           <Key
//             value={key}
//             key={key}
//             onClick={onClick}
//             status={charStatuses[key]}
//             isRevealing={isRevealing}
//           />
//         ))}
//       </div>
//       <div className="flex justify-center mb-1">
//         {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((key) => (
//           <Key
//             value={key}
//             key={key}
//             onClick={onClick}
//             status={charStatuses[key]}
//             isRevealing={isRevealing}
//           />
//         ))}
//       </div>
//       <div className="flex justify-center">
//         <Key width={65.4} value="ENTER" onClick={onClick}>
//           {ENTER_TEXT}
//         </Key>
//         {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((key) => (
//           <Key
//             value={key}
//             key={key}
//             onClick={onClick}
//             status={charStatuses[key]}
//             isRevealing={isRevealing}
//           />
//         ))}
//         <Key width={65.4} value="DELETE" onClick={onClick}>
//           {DELETE_TEXT}
//         </Key>
//       </div>
//     </div>
//   )
// }
