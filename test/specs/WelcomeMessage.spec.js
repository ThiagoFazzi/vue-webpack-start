import { render } from '@testing-library/vue'
import WelcomeMessage from '@/components/Home/WelcomeMessage'

describe('WelcomeMessage.vue', () => {
  it('renders props.msg when passed', () => {
    const name = 'tester'

    const { findByText } = render(WelcomeMessage, {
      propsData: { name }
    })

    findByText(`tester, ${$t('homeTitle')}`)
  })
})