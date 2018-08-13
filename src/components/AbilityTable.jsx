//@flow
import * as React from 'react';

type Props = {
  str: [number, number],
  dex: [number, number],
  con: [number, number],
  int: [number, number],
  wis: [number, number],
  cha: [number, number],
};

const AbilityTable = (props: Props) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Str</th>
          <th>Dex</th>
          <th>Con</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {
              props.str[1] > 0 ? `+${props.str[1]}` : `${props.str[1]}`
            }
          </td>
          <td>
            {
              props.dex[1] > 0 ? `+${props.dex[1]}` : `${props.dex[1]}`
            }
          </td>
          <td>
            {
              props.con[1] > 0 ? `+${props.con[1]}` : `${props.con[1]}`
            }
          </td>
        </tr>
        <tr>
          <td>{props.str[0]}</td>
          <td>{props.dex[0]}</td>
          <td>{props.con[0]}</td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th>Int</th>
          <th>Wis</th>
          <th>Cha</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {
              props.int[1] > 0 ? `+${props.int[1]}` : `${props.int[1]}`
            }
          </td>
          <td>
            {
              props.wis[1] > 0 ? `+${props.wis[1]}` : `${props.wis[1]}`
            }
          </td>
          <td>
            {
              props.cha[1] > 0 ? `+${props.cha[1]}` : `${props.cha[1]}`
            }
          </td>
        </tr>
        <tr>
          <td>{props.int[0]}</td>
          <td>{props.wis[0]}</td>
          <td>{props.cha[0]}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default AbilityTable;
