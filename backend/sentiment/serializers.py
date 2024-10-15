from rest_framework import serializers

class SentimentSerializers(serializers.Serializer):
    text = serializers.CharField(max_length=500)