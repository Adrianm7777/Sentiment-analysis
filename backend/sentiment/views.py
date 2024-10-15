from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from serializers import SentimentSerializers

def analyze_sentiment(text):
    return {'sentiment':'neutral'}

@api_view(['POST'])
def analyze_text(request):
    seralizer = SentimentSerializers(data=request.data)

    if seralizer.is_valid():
        text = seralizer.validated_data['text']
        result = analyze_sentiment(text)

        return Response(result)
    return Response(seralizer.errors, status=400)