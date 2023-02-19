import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { themeDecor } from 'shared/config/storybook/decorators'
import { Button } from './Button'
import { Theme } from 'app/providers/theme-providers'

export default {
  title: 'ui/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  theme: 'clear',
  children: 'text'
}

export const Secondary = Template.bind({})
Secondary.decorators = [themeDecor(Theme.DARK)]
Secondary.args = {
  theme: 'outline',
  children: 'text'
}
