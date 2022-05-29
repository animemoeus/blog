from rest_framework import serializers


from blog.models import Category, Post


class PostSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.category")
    category_slug = serializers.CharField(source="category.slug")

    class Meta:
        model = Post
        fields = ("title", "slug", "content", "category", "category_slug", "created_at")
