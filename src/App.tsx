import Text from "./components/text";

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
    </div>
  );
}

export default App;
