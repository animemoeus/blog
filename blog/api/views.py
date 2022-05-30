from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import status

from blog.models import Post
from .serializers import PostsSerializer, PostDetailSerializer


def index(request):
    return HttpResponse("arter")


@api_view()
def posts(request):
    queryset = Post.objects.all().order_by("-id")

    paginator = PageNumberPagination()
    paginator.page_size = 7

    result = paginator.paginate_queryset(queryset, request)
    serializer = PostsSerializer(result, many=True)

    return paginator.get_paginated_response(serializer.data)


@api_view()
def detail(request, slug):
    try:
        queryset = Post.objects.get(slug=slug)
    except Post.DoesNotExist:
        return Response(
            {"success": False, "data": None}, status=status.HTTP_404_NOT_FOUND
        )

    serializer = PostDetailSerializer(queryset)

    return Response({"success": True, "data": serializer.data})
