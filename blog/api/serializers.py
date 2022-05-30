from rest_framework import serializers


from blog.models import Category, Post


class PostsSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.category")
    category_slug = serializers.CharField(source="category.slug")

    class Meta:
        model = Post
        fields = ("title", "slug", "excerpt", "category", "category_slug", "created_at")


class PostDetailSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source="category.category")
    category_slug = serializers.CharField(source="category.slug")

    class Meta:
        model = Post
        fields = ("title", "content", "category", "category_slug", "created_at")
