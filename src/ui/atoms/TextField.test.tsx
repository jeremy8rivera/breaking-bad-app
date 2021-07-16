
import {shallow} from 'enzyme'
import TextField from './TextField'

describe('Button', () => {
    const mockFn = jest.fn()
    const wrapper = shallow(<TextField onChange={mockFn} value="some name" placeholder="maybe"/>)

    it('Passes Props', () => {
        expect(wrapper.props().value).toBe('some name')
        expect(wrapper.props().placeholder).toBe('maybe')
    })

    it('Calls onChange', () => {
        expect(mockFn).not.toHaveBeenCalled()
        wrapper.getElement().props.onChange()
        expect(mockFn).toHaveBeenCalled()
    })
})