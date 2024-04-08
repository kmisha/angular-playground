import renderer from 'react-test-renderer'
import {faker} from '@faker-js/faker'
import Profile from './Profile'

it('Passing props to the Profile component', () => {
    faker.seed(1);
    const component = renderer.create(
        <Profile src={faker.image.url()} alt={faker.person.fullName()} />
    )
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})

it('Using a rounded profile', () => {
    faker.seed(2);
    const component = renderer.create(
        <Profile src={faker.image.url()} alt={faker.person.fullName()} isAvatar={true} />
    )
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
})
