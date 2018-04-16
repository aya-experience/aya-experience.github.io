import members from './members';

jest.mock('../utils', () => {
	return {
		download(uri) {
			return uri;
		}
	};
});

describe('members adapter', () => {
	let fixture;
	beforeEach(() => {
		fixture = {
			data: {
				name: 'Nicolas',
				role: [
					{ text: 'trainee' }
				],
				picture: {}
			}
		};
	});

	it('should return an object containing the correct name', () => {
		expect(members.adapt(fixture).name).toEqual('Nicolas');
	});

	it('should return an object containing the correct role', () => {
		expect(members.adapt(fixture).role).toEqual('trainee');
	});

	it('should return an object containing an empty img', () => {
		expect(members.adapt(fixture).img).toEqual('');
	});
	it('should return an object containing en url in img field', () => {
		fixture.data.picture.url = 'https://pupuce.com/douxbar.jpeg';
		expect(members.adapt(fixture).img).toEqual('https://pupuce.com/douxbar.jpeg');
	});
});
