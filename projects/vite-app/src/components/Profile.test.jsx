import renderer from 'react-test-renderer'
import {faker} from '@faker-js/faker'
import Profile from './Profile'

it('Passing props to the Profile component', () => {
    const component = renderer.create(
        <Profile src={faker.image.url} alt={faker.person.fullName} id={faker.number.int(100)} />
    )
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})
