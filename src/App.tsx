import Text from "./components/Text";
import Icon from "./components/Icon";

import TrashIcon from "./assets/icons/trash.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import SpinnerIcon from "./assets/icons/spinner.svg?react";
import XIcon from "./assets/icons/x.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";

import Badge from "./components/Badge";

function App() {
  return (
    <div className="flex flex-col gab-2">
      <Text variant="body-sm-bold" className="text-pink-dark">
        Hello World
      </Text>
      <Text variant="body-md" className="text-pink-dark">
        Hello World
      </Text>
      <Text variant="body-md-bold" className="text-pink-dark">
        Hello World
      </Text>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-dark" />
        <Icon svg={PencilIcon} className="fill-pink-dark" />
        <Icon svg={CheckIcon} className="fill-pink-dark" />
        <Icon svg={SpinnerIcon} className="fill-pink-dark" animate />
        <Icon svg={XIcon} className="fill-pink-dark" />
        <Icon svg={PlusIcon} className="fill-pink-dark" />
      </div>

      <div className="flex gap-1">
        <Badge variant="primary" size="sm">
          2 de 5
        </Badge>
      </div>
    </div>
  );
}

export default App;
