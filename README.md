# Discount

**Discount** - компонент-контрол для ввода размера скидки

Компонент не имеет своего состояния и является controlled, то есть его состояние должно хранится в родительском компоненте

## Props:

Компонент принимает следующие props.

| Prop     | Type     | Description                         |
| -------- | -------- | ----------------------------------- |
| title    | string   | Залоголовок компонента              |
| name     | string   | имя для input                       |
| value    | number   | значение для input                  |
| onChange | function | функция для события изменения input |

_Все props являются обязательными!_

## Пример использования:

```jsx
class DiscountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Discount title="Скидка" name="sale" value={this.state.value} onChange={handleChange} />
    );
  }
}
```
