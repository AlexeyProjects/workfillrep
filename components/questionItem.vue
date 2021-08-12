<template>
	<div class="question-item">
		<div class="question-item__id row">
			<div class="subtitle">
				ID вопроса: 
			</div>  {{ question.id }}
		</div>
		<div class="question-item__title row">
			Заголовок вопроса: {{ question.title }}
		</div>
		<div class="question-item__type row">
			Тип вопроса: {{ question.type }}
		</div>
		<div class="question-item__consultant row">
			Текст консультанта
		</div>
		<div class="question-item-variables">
			<div 
			class="question-item-variables__item"
			v-for="(item, key, index) in question.items"
			>
				{{item.title}}
			</div>
		</div>
		
	</div>
</template>

<style>
	
</style>

<script>

	export default {
		props: {
			'question': {
				default: {}
			}
		}
	}
</script>