import renderer from 'react-test-renderer';
import Careers from 'src/components/Careers';

describe('Careers tests', () => {
  it('Render works correctly', () => {
    const tree = renderer.create(<Careers />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
