from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import SentimentSerializers
from textblob import TextBlob

def analyze_sentiment(text):
    blob = TextBlob(text)
    sentiment_score = blob.sentiment.polarity
    if sentiment_score > 0:
        sentiment = 'positive'
    elif sentiment_score < 0:
        sentiment = 'negative'
    else: sentiment ='neutral'

    return {"sentiment": sentiment, "polarity": sentiment_score}
    

@api_view(['POST'])
def analyze_text(request):
    seralizer = SentimentSerializers(data=request.data)

    if seralizer.is_valid():
        text = seralizer.validated_data['text']
        result = analyze_sentiment(text)

        return Response(result)
    return Response(seralizer.errors, status=400)