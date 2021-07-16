import Button from "./Button"
import {shallow} from 'enzyme'

describe('Button', () => {
    const onClick = jest.fn()
    const wrapper = shallow(<Button onClick={onClick} value="some name"/>)

    it('Passes Props', () => {
        expect(wrapper.props().value).toBe('some name')
        expect(wrapper.props().onClick).toBe(onClick)
    })

    it('Calls OnClick', () => {
        expect(onClick).not.toHaveBeenCalled()
        wrapper.getElement().props.onClick()
        expect(onClick).toHaveBeenCalled()
    })
})