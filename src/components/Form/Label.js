import { h } from 'vue'

export default function Label(props, context) {
	return h(
		'label',
		{
			class: `mb-2 block text-xs font-bold uppercase text-slate-600 ${
				props.class ? props.class : ''
			}`,
			...props,
		},
		context.slots
	)
}
