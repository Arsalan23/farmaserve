import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Upload, Video, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AddReel = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [caption, setCaption] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video'>('image');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Reel uploaded!',
      description: 'Your reel has been posted successfully.',
    });
    navigate('/provider/reels');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/provider/reels')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Reels
        </Button>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Upload Reel / Story</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Media Type */}
              <div className="space-y-2">
                <Label>Media Type</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant={mediaType === 'image' ? 'default' : 'outline'}
                    onClick={() => setMediaType('image')}
                    className="gap-2"
                  >
                    <Image className="h-4 w-4" />
                    Image
                  </Button>
                  <Button
                    type="button"
                    variant={mediaType === 'video' ? 'default' : 'outline'}
                    onClick={() => setMediaType('video')}
                    className="gap-2"
                  >
                    <Video className="h-4 w-4" />
                    Video
                  </Button>
                </div>
              </div>

              {/* Upload Area */}
              <div className="space-y-2">
                <Label>Upload {mediaType === 'image' ? 'Image' : 'Video'}</Label>
                <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center">
                  <Upload className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {mediaType === 'image' ? 'PNG, JPG up to 10MB' : 'MP4, MOV up to 50MB'}
                  </p>
                  <Button type="button" variant="outline">
                    Choose File
                  </Button>
                </div>
              </div>

              {/* Caption */}
              <div className="space-y-2">
                <Label htmlFor="caption">Caption *</Label>
                <Textarea
                  id="caption"
                  placeholder="Write a caption for your reel..."
                  rows={4}
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Add hashtags to increase visibility
                </p>
              </div>

              {/* Submit */}
              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Upload Reel
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/provider/reels')}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddReel;
